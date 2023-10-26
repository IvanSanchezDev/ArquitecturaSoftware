import axios from "axios";


export class DispenserAdapter {


      static async crearDispenser(data){
        try {
            const url = 'https://65352ec0c620ba9358ec3dd2.mockapi.io/mocks/rviewer/beer-tap-dispense/dispenser';

        
        const res = await axios.post(url, data);
        
        return res.data;
        } catch (error) {
            console.log("error adapter: " + error.message);
        }
        
      }
}