import react from 'react';
import{BorwserRouter,Switch,Route} from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/DashBoardLayout';
const Controller=()=>{
    return(
       <BorwserRouter>
               <DashboardLayout>
               this is dashboard
                 <Switch>
                    <Route/>
                 </Switch>
               </DashboardLayout>
       </BorwserRouter>

    )
}
export default Controller;