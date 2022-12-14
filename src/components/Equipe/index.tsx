import React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { SectionDef } from '../styledDefault';
import { DivEquipe, ImgPerfil, Links } from './styled';

import InstagramIcon from '@mui/icons-material/Instagram';

import { desc1, desc2, desc21 } from './text';


const Equipe = () => {
    return (
        <SectionDef id='team'>
                <Typography 
                    variant="h2" 
                    color="initial"
                    data-aos="fade-down" data-aos-duration="1000"
                >
                    Equipe
                </Typography>
            <DivEquipe>
                <Grid container>
                    <Grid 
                        item
                        xs={12} 
                        md={6}
                        display='flex' 
                        justifyItems='center'
                        justifyContent='center'
                        alignItems='center'
                        data-aos="fade-right"
                        data-aos-duration='1000'
                    >
                        <ImgPerfil src='./assets/image/ju.webp' alt='Arquiteto 1'/>
                        <Links href='https://www.instagram.com/servianjuliana/' target='_blank'><InstagramIcon/></Links>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={6} 
                        lg={5} 
                        padding={4}
                        data-aos="fade-left"
                        data-aos-duration='1000'
                    >
                        <Typography variant="h3" color="initial">Juliana Servian</Typography>
                        <Typography variant="h5" color="initial">Arquiteta & Sócia</Typography>
                        <Typography variant="body1" color="initial">{desc1}</Typography>
                    </Grid>
                </Grid>
                <Grid container marginTop={8} flexDirection='row-reverse'>
                  <Grid 
                        item
                        xs={12} 
                        md={6}
                        display='flex' 
                        justifyItems='center'
                        justifyContent='center'
                        alignItems='center'
                        data-aos="fade-left"
                        data-aos-duration='1000'
                    >  
                        <ImgPerfil src='./assets/image/joao.webp' alt='Arquiteto 1'/>
                        <Links href='https://www.instagram.com/ojoaopedro_arq/' target='_blank'><InstagramIcon/></Links>
                    </Grid>
                    <Grid 
                        item
                        xs={12} 
                        md={6} 
                        lg={5} 
                        padding={4}
                        data-aos="fade-right"
                        data-aos-duration='1000'
                    >
                        <Typography variant="h3" color="initial">João Pedro Cáceres</Typography>
                        <Typography variant="h5" color="initial">Arquiteto & Sócio</Typography>
                        <Typography variant="body1" color="initial">{desc2}</Typography>
                        <Typography variant="body1" color="initial">{desc21}</Typography>
                    </Grid>
                </Grid>

            </DivEquipe>

        </SectionDef>
    );
};

export default Equipe;