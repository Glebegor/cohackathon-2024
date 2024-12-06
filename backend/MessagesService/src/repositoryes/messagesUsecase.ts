import { MongoClient } from "mongodb";




interface IRepositoryMessages {
    databaseClient: MongoClient;
}

function newRepositoryMessages(databaseClient: MongoClient): IRepositoryMessages {
    var repo: IRepositoryMessages = {
        databaseClient: databaseClient
    };
    return repo;
}

export { IRepositoryMessages, newRepositoryMessages };