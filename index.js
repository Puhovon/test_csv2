import _ from 'lodash';

export default function solution(content){
  // BEGIN
  //step - 1
  const con = content.trim().split('\n').slice(1);
  console.log(`Всего партий: ${con.length}`);
  
  
  //step - 2
  const rated = con.filter((el) => el.split(',')[1] === 'TRUE');
  const unRate = con.filter((el) => el.split(',')[1] === 'FALSE');
  const avRate = Math.round((rated.length / con.length) * 100);
  const avUnRate = Math.round((unRate.length / con.length) * 100);
  console.log(`Кол-во рейтинговых игр: ${rated.length}\nСоотношение:${avRate} : ${avUnRate}`);
  // END
}