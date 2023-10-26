import { DispenserService } from "../domain/service.js"

export class Controller{

    

    static  crearDispenser=async (req, res)=>{
        try {
            
            const {flow_volume} =req.body
            const result=await DispenserService.saveBeer(flow_volume)
            res.status(200).json(result)

        } catch (error) {
            console.log("error controller" + error.message);
        }
    }
}