import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';

const customers = [{
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name': '안길성',
  'birthday': '980311',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name': '나태주',
  'birthday': '940312',
  'gender': '여자',
  'job': '대학교'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name': '임호연',
  'birthday': '980312',
  'gender': '남자',
  'job': '대학원생'
}]
function App() {
  return (
    <div>
      {
        customers.map(c => {                                                                                                                                                                                
          return (
            <Customer
              key={c.id}
              mage = {c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          )
        })
      }
      <Customer
      id = {customers[0].id}
      image = {customers[0].image}
      name={customers[0].name}
      birthday={customers[0].birthday}
      gender={customers[0].gender}
      job={customers[0].job}
    />
    <Customer
      id = {customers[1].id}
      image = {customers[1].image}
      name={customers[1].name}
      birthday={customers[1].birthday}
      gender={customers[1].gender}
      job={customers[1].job}
    />
    <Customer
      id = {customers[2].id}
      image = {customers[2].image}
      name={customers[2].name}
      birthday={customers[2].birthday}
      gender={customers[2].gender}
      job={customers[2].job}
    />
    </div>
    
  );
}

export default App;
