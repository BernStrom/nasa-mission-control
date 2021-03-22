import { Router } from 'https://deno.land/x/oak@v6.5.0/mod.ts';
import * as planets from './models/planets.ts';
import * as launches from './models/launches.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = `
    {___     {__      {_         {__ __        {_       
    {_ {__   {__     {_ __     {__    {__     {_ __     
    {__ {__  {__    {_  {__     {__          {_  {__    
    {__  {__ {__   {__   {__      {__       {__   {__   
    {__   {_ {__  {______ {__        {__   {______ {__  
    {__    {_ __ {__       {__ {__    {__ {__       {__ 
    {__      {__{__         {__  {__ __  {__         {__
        
                    Mission Control API`;
});

router.get('/planets', (ctx) => {
  ctx.response.body = planets.getAllPlanets();
});

router.get('/launches', (ctx) => {
  ctx.response.body = launches.getAllLaunches();
});

router.get('/launches/:id', (ctx) => {
  if (ctx.params?.id) {
    const launchesData = launches.getOneLaunch(Number(ctx.params.id));
    if (launchesData) {
      ctx.response.body = launchesData;
    } else {
      ctx.throw(400, 'Launch ID not found');
    }
  }
});

export default router;
