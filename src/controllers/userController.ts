import { Request, Response } from "express";
import User from "../models/user.model";

class UserController {
  constructor() {}

  public async index(req: Request, res: Response) {
    const users = await User.findAll();

    if (!users) {
      return res.status(404).json({ message: "Usuários não encontrados" });
    }

    return res.status(200).json(users);
  }

  public async store(req: Request, res: Response) {
    const user = await User.create<User>(req.body);

    if (!user) {
      return res.status(500).json({ message: "Erro ao criar usuário" });
    }

    return res.status(200).json(user);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.update<User>(req.body, {
      where: { id: id },
    });

    if (!user) {
      return res.status(500).json({ message: "Erro ao atualizar usuário" });
    }

    return res.status(200).json(user);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.destroy<User>({
      where: { id: id },
    });

    if (!user) {
      return res.status(500).json({ message: "Erro ao deletar usuário" });
    }

    return res.status(200).json("Usuário deletado com sucesso");
  }
}

export default new UserController();
