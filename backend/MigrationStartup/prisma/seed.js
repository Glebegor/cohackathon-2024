"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var youngRole, adultRole, adminRole, superAdminRole, childHouse, childHouse2, user1, user2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.role.create({
                        data: { name: 'Admin' },
                    })];
                case 1:
                    youngRole = _a.sent();
                    return [4 /*yield*/, prisma.role.create({
                            data: { name: 'User' },
                        })];
                case 2:
                    adultRole = _a.sent();
                    return [4 /*yield*/, prisma.role.create({
                            data: { name: 'User' },
                        })];
                case 3:
                    adminRole = _a.sent();
                    return [4 /*yield*/, prisma.role.create({
                            data: { name: 'User' },
                        })
                        // Vytvoření ChildHouse
                    ];
                case 4:
                    superAdminRole = _a.sent();
                    return [4 /*yield*/, prisma.childHouse.create({
                            data: {
                                name: 'Happy Children\'s Home',
                                description: 'A safe place for children.',
                                address: '1234 Elm St, Springfield',
                                phone: '+1234567890',
                                email: 'contact@happychildren.org',
                            },
                        })];
                case 5:
                    childHouse = _a.sent();
                    return [4 /*yield*/, prisma.childHouse.create({
                            data: {
                                name: 'Happy Children\'s Home',
                                description: 'A safe place for children.',
                                address: '1234 Elm St, Springfield',
                                phone: '+1234567890',
                                email: 'contact@happychildren.org',
                            },
                        })
                        // Vytvoření uživatelů
                    ];
                case 6:
                    childHouse2 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                childhouse_id: childHouse.id,
                                name: 'John',
                                surname: 'Doe',
                                email: 'john.doe@example.com',
                                password_hash: 'hashed_password_1', // Pozor: Zde by mělo být skutečné hašování hesla
                                activated: true,
                                role_id: adminRole.id,
                            },
                        })];
                case 7:
                    user1 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                childhouse_id: childHouse2.id,
                                name: 'Jane',
                                surname: 'Doe',
                                email: 'jane.doe@example.com',
                                password_hash: 'hashed_password_2', // Pozor: Zde by mělo být skutečné hašování hesla
                                activated: true,
                                role_id: youngRole.id,
                            },
                        })
                        // Vytvoření uživatelského profilu pro Users
                    ];
                case 8:
                    user2 = _a.sent();
                    // Vytvoření uživatelského profilu pro Users
                    return [4 /*yield*/, prisma.userProfile.create({
                            data: {
                                user_id: user1.id,
                                description: 'A passionate social worker.',
                                interests: 'Helping children, Community work',
                                note: 'Looking forward to making a positive impact.',
                                profile_picture: 'profile1.jpg',
                                back_story: 'Grew up in a small town, always wanted to help others.',
                            },
                        })];
                case 9:
                    // Vytvoření uživatelského profilu pro Users
                    _a.sent();
                    return [4 /*yield*/, prisma.userProfile.create({
                            data: {
                                user_id: user2.id,
                                description: 'A passionate social worker.',
                                interests: 'Helping children, Community work',
                                note: 'Looking forward to making a positive impact.',
                                profile_picture: 'profile1.jpg',
                                back_story: 'Grew up in a small town, always wanted to help others.',
                            },
                        })
                        // Vytvoření deníku pro Users
                    ];
                case 10:
                    _a.sent();
                    // Vytvoření deníku pro Users
                    return [4 /*yield*/, prisma.diary.create({
                            data: {
                                user_id: user1.id,
                                emotion: 'Happy',
                                note: 'Had a productive day at work!',
                                shared: false,
                            },
                        })];
                case 11:
                    // Vytvoření deníku pro Users
                    _a.sent();
                    return [4 /*yield*/, prisma.diary.create({
                            data: {
                                user_id: user2.id,
                                emotion: 'Happy',
                                note: 'Had a productive day at work!',
                                shared: false,
                            },
                        })];
                case 12:
                    _a.sent();
                    console.log('Seed data inserted successfully!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    throw e;
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
