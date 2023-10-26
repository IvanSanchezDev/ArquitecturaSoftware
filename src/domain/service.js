
import { DispenserAdapter } from "../infraestructure/adapter.js";
import crypto from 'node:crypto'

export class DispenserService {


  static async saveBeer(flow){
    try {
        
        const id_random=crypto.randomUUID()
        const data={
            id_dispenser:id_random,
            flow_volume:flow,
            amount:0,
            usages:[]
        }

       

        const {id_dispenser, flow_volume}=await DispenserAdapter.crearDispenser(data)
        const showData={
          id:id_dispenser,
          flow_volume:flow_volume
      }

       return showData
        
    } catch (error) {
        console.log(error);
    }
}
  
  }