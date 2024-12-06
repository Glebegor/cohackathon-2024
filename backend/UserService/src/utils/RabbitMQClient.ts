import amqp, { Connection, Channel, Replies } from "amqplib";

export class RabbitMQClient {
  private connection: Connection | null = null;
  private channel: Channel | null = null;

  constructor(private url: string) {}

  async connect(): Promise<void> {
    this.connection = await amqp.connect(this.url);
    this.channel = await this.connection.createChannel();
  }

  async createQueue(queue: string): Promise<Replies.AssertQueue> {
    if (!this.channel) throw new Error("Channel not initialized.");
    return this.channel.assertQueue(queue, { durable: false });
  }

  async sendMessage(queue: string, message: string): Promise<void> {
    if (!this.channel) throw new Error("Channel not initialized.");
    this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async consume(
    queue: string,
    callback: (msg: amqp.ConsumeMessage | null) => void
  ): Promise<void> {
    if (!this.channel) throw new Error("Channel not initialized.");
    await this.channel.consume(queue, (msg) => {
      callback(msg);
      if (msg) this.channel?.ack(msg);
    });
  }

  async close(): Promise<void> {
    await this.channel?.close();
    await this.connection?.close();
  }
}
