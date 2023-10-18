"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PacienteRoutes_1 = __importDefault(require("./routes/PacienteRoutes"));
const SecretariaRoutes_1 = __importDefault(require("./routes/SecretariaRoutes"));
const ConsultaRoutes_1 = __importDefault(require("./routes/ConsultaRoutes"));
const AgendaRoutes_1 = __importDefault(require("./routes/AgendaRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', PacienteRoutes_1.default);
app.use('/api', SecretariaRoutes_1.default);
app.use('/api', ConsultaRoutes_1.default);
app.use('/api', AgendaRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Prontuário eletrônico - API');
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});