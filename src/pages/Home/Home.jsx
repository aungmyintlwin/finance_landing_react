// lig
import React from 'react'
import { 
  Grid,
  Typography
} from '@mui/material';

//custom
import './Home.css'
import Content from '../Layout/Content/Content.jsx'
import ServiceCard from './Services/ServiceCard.jsx'
import ReportCard from './Report/ReportCard.jsx';
import NewsCard from './News/NewsCard.jsx';

const DATA = [
  {
    id: "1",
    heaer: "Hana Financial Group",
    title: "Finance that grows together and shares happiness",
    body: "We are growing into a financial company where employees, customers, and society are all happy.",
  },
  {
    id: "2",
    heaer: "Global Network",
    title: "211 networks in 25 regions around the world",
    body: "Leaping to become a world-class financial group through Korea's largest global network",
  },
  {
    id: "3",
    heaer: "Stock price information",
    title: "Hana Financial Group (086790) 56,600 KRW",
    body: "1,000 won compared to the previous day (1.80%) 1,000 won compared to the previous day (1.80%)",
  },
];
function Home() {
  return (
    <>
      <Content>
        <Grid container spacing={5} sx={{mt: 10}}>
          {
            DATA.map(item => (
              <Grid item  xs={12} sm={4} key={item.id}>
                <ServiceCard header={item.heaer} title={item.title} body={item.body}/>
              </Grid>
            ))
          }
        </Grid>        
        <Grid container spacing={{sm: 5}} sx={{mt: {sm: 4,xs: 3}}}>
          <Grid item  xs={12} sm={4}>
            <ReportCard header="ESG REPORT" title="2022 Sustainability Report" img={require("../../assets/images/report_1.jpeg")}/>
          </Grid>
          <Grid item  xs={12} sm={4} sx={{ml: {sm: -5},mr: {sm: 5}}}>
            <ReportCard header="ANNUAL REPORT" title="2022 Annual Report" img={require("../../assets/images/report_2.jpeg")}/>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <ReportCard header="Business performance" title="2023 management announcement" img={require("../../assets/images/report_1.jpeg")}/>
          </Grid>
        </Grid>
        <Typography variant="h3" gutterBottom sx={{textAlign: 'left',fontWeight: 'bold',my: 3}}>
          Hana News
        </Typography>    
        <Grid container spacing={3}>
          <Grid item  xs={12} sm={3}>
            <NewsCard img={require('../../assets/images/news_1.jpeg')}/>
          </Grid>
          <Grid item  xs={12} sm={3}>
            <NewsCard img={require('../../assets/images/news_2.jpeg')}/>
          </Grid>
          <Grid item  xs={12} sm={3}>
            <NewsCard img={require('../../assets/images/news_3.jpeg')}/>
          </Grid>
          <Grid item  xs={12} sm={3}>
            <NewsCard img={require('../../assets/images/news_1.jpeg')}/>
          </Grid>
        </Grid>        
      </Content>
    </>
  )
}

export default Home
