"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const monday_routes_1 = __importDefault(require("./monday-routes"));
router.use(monday_routes_1.default);
router.get('/', function (req, res) {
    res.
        json(getHealth());
});
router.get('/health', function (req, res) {
    res.json(getHealth());
    res.end();
});
function getHealth() {
    return {
        ok: true,
        message: 'Healthy'
    };
}
exports.default = router;
