import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    // Passo 1: Configurar o transporter

    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "8b65376b559c41",
          pass: "d4234fe5f6246b"
        }
    });

    // Passo 2: Configurar a mensagem

    let message = {
        from: 'nao-responda@b7web.com.br',
        to: 'lucas@gmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email

    }

    // Passo 3: Enviar a mensagem

    let info = await transport.sendMail(message);

    console.log('INFO', info);

    res.json({success: true});
}