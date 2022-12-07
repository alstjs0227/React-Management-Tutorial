import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    with: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  talbe: {
    minwidth: 1080
  }
})

const customers = [
{
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
}
]

function App() {
  return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c => {return (<Customer key={c.id} image = {c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
          </TableBody>
        </Table>
      </Paper>
      
    );
}

export default App;
