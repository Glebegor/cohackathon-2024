import Config from '../../../domain/common/config';


// Config tests
describe('Config', () => {
    it('should return a config object', () => {
        const config = {
            server: {
                port: 5001,
                host: "localhost",
                secret: "123321"
            },
            db: {
                postgres: {
                    user: "root",
                    host: "localhost",
                    database: "hackathon-postgres",
                    port: 5200,
                    password: "123321"
                }, 
                mongo: {
                    user: "root",
                    host: "localhost",
                    database: "hackathon-mongo",
                    port: 5100,
                    password: "123321"
                }
            },
            services: {
                messagesServicePort: 5003,
                userServicePort: 5002,
                supportServicePort: 5004
            }
        };

        expect(config).toBe(config);
    });
});
