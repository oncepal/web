import {Button, OPUIProvider} from '@oncepal/ui'
import Charts from './components/Charts';

export default function Page() {

  


  return (
    <OPUIProvider>
      <Button>hello world</Button>
      <Button>hello world</Button>
     <Charts/>
    </OPUIProvider>
  );
}
