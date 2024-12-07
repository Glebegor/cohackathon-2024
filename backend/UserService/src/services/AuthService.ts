import { RabbitMQClient } from "../utils/RabbitMQClient";

export class AuthService {
  private client: RabbitMQClient;
  private replyQueue: string;

  constructor() {
    const url = process.env.RABBITMQ_URL || "amqp://guest:guest@100.122.0.1:5301";
    this.client = new RabbitMQClient(url);
    this.replyQueue = process.env.AUTH_REPLY_QUEUE || "auth_replies";
  }

  async init(): Promise<void> {
    await this.client.connect();
    await this.client.createQueue(this.replyQueue);
  }

  async verifyToken(token: string): Promise<any> {
    const requestQueue = process.env.AUTH_QUEUE || "auth_requests";
    const correlationId = Math.random().toString(36).substring(7);

    const responsePromise = new Promise((resolve, reject) => {
      this.client.consume(this.replyQueue, (msg) => {
        if (!msg) {
          reject(new Error("No response received."));
          return;
        }

        const { correlationId: msgId, data } = JSON.parse(msg.content.toString());
        if (msgId === correlationId) {
          resolve(data);
        }
      });
    });

    const message = JSON.stringify({ token, correlationId });
    await this.client.sendMessage(requestQueue, message);

    return responsePromise;
  }
}
