import {pceConfig} from "./PCE";
import {kipuConfig} from "./Kipu";
import {credibleConfig} from "./Credible";
export const getSchemaByClient = (clientName: string) => {
    switch (clientName){
        case 'PCE':
            return pceConfig;
        case 'Kipu':
            return kipuConfig;
        case 'Credible':
            return credibleConfig;
        default:
            return {}
    }
}