import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

export default function CallNow () {
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className='bg-call flex md:items-center md:justify-between'>
      <span className='px-4 cursor-pointer text-white font-bold'>Call Us Now &nbsp; &nbsp;<ion-icon name="call-outline"></ion-icon> 0803*33***44** </span>
      <span className='mx-24 md:my-0 bg-primary px-4 py-4 cursor-pointer text-white font-bold'>Free Consultation</span>
    </div>
    
  )
}
