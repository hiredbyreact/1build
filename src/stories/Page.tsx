import React, { useState, useEffect } from 'react';
import './page.css';
import { Typography, Box, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import TopNav from '../Components/TopNav';
import CTABtn from '../Components/CTABtn';
import imageFile from '../Components/ParallaxImg/svg.png';
import { withTheme } from '../Theme';
import postData from "./data.json";

import TriangleNumber from '../Components/TriangleNumber';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export interface IPost {
  "title": String;
  "author": String;
  "posted": Number;
}

export const Page: React.FC<PageProps> = () => {
  const [data, setData] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchData = () => new Promise((resolve) => setTimeout(resolve, 3000))
      .then(() => setData(postData.posts));
    fetchData();
  }, []);

  return withTheme(
    <Grid container component="article" spacing={2}>
      <TopNav />
      <Grid container xs={12} component="section">
        <Grid item xs={12} md={6}>
          <Box className="imgBounds">
            <img src={imageFile} alt="ParallaxImg" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">
            Building is about getting around the obstacles that are presented to you.
					</Typography>
          <CTABtn>Learn More</CTABtn>
          <Box className="data-grid">
            {data && Array.isArray(data) && data.length > 0 ? data.map(({ title, author, posted }: IPost, i: number) => <Box key={`data-grid-${posted}-${author.split(" ").join("")}`} component="div">
              <TriangleNumber>{i + 1}</TriangleNumber>
              <Box component="div">
                <Typography variant="body1">{title}</Typography>
                <Box component="div">
                  <Typography variant="body1">
                    {new Date(posted.toString()).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                    {author}
                  </Typography>
                </Box>
              </Box>
            </Box>) : [1, 2, 3].map((d) => <Skeleton key={`skeleton-${d}`} variant="rect" width={210} height={118} />)}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box className="footer">
          <Typography>Footer</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}