import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importCatergoryUseCase = container.resolve(ImportCategoryUseCase);

        await importCatergoryUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };
