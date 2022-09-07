import { hot } from 'react-hot-loader/root';
import React from 'react';
import  './main.global.css'
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { Dropdown } from './shared/Components/Dropdown';
import { generateId } from './utils/react/generateRandomIndex';
import { MyList } from './shared/GenericList/GenericList';
import { merge } from './utils/js/merge';


const LIST = [
  { value: 'some'},
  { value: 'other some'},
  { value: 'some'}
].map(obj => generateId(obj))


function AppComponent() {
  const [list, setlist] = React.useState(LIST);

  const handelItemClick = (id: string) => {
    setlist(list.filter(item => item.id !== id))
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
          <MyList list={LIST.map(merge({onClick: handelItemClick}))}/>
        <Dropdown button={<button>Test</button>}>
        </Dropdown >
      </Content>
    </Layout>
  )
}


export const App = hot(() => <AppComponent/>)
