const todoTitle = "Start React";
const todoDis ="Today is tarted to learning react js. React js is a free and open-source front-end JavaScript library. Today is tarted to learning react js. React js is a free and open-source front-end JavaScript library. Today is tarted to learning react js. React js is a free and open-source front-end JavaScript library.";
const todoDate = "Nov/3/2022";
const dateText = "Current year is:";
const thisYearName = new Date().getFullYear();
const thisMonthName = new Date().getMonth();
const thisDayName = new Date().getDay();

function Card (props) {
  const {titleText, disText} = props;
  return <div class="card">
  <h1 className='card-heading' >{titleText}</h1>
  <p className='card-dis'>{disText}</p>
  <p className='card-date'>{thisDayName}/{thisMonthName}/{thisYearName}</p>
</div>
}

export default Card;