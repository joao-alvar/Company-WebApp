import Link from 'next/link'
import CountUp from 'react-countup'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsPercent} from 'react-icons/bs'

import styled from 'styled-components'

export const GridSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 80%;
  margin: 10em 0 0;
  gap: 4em;
  flex-direction: column;
  height: 108em;
`

export const TitleContainer = styled.div`
  text-align: center;
  margin: 2em;
  font-family: Inter;

  p {
    font-size: 1.6em;
    color: rgb(80, 90, 99);
    font-family: Overpass;
    font-weight: 700;
  }

  h2 {
    font-size: 5em;
    font-weight: 600;
    color: rgb(25, 28, 31);
    margin: 0.71rem 0 0;
    padding: 0px;
  }

  h3 {
    font-size: 1.6em;
    font-weight: 600;
    color: rgb(25, 28, 31);
    word-break: break-word;
    margin: 1.2rem 0 0;
    padding: 0px;
  }
`

export const GridContainer = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  gap: 1.5em;
`

export const LinkGrid = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover .grid_1_span {
    background-color: #0000003d;
  }
  &:hover .grid_2_span {
    background-color: #fffefe2f;
  }
`

export const GridTop = styled.div`
  height: 15em;
  padding: 20px;
  font-size: 30px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #faf0e6;

  .grid_1_container {
    width: 50%;
    /* height: 40%; */
    color: #000;
  }

  .grid_1_content_p {
    font-size: 0.61em;
    margin: 0.5em 0 0;
  }

  .grid_1_span {
    font-size: 0.8em;
    position: absolute;
    bottom: 1em;
    border-radius: 18px;
    padding: 6px 8px;
  }

  .grid_1_gif {
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const ArrowIcon = styled(AiOutlineArrowRight)`
  transform: translateY(6px);
  margin-left: 4px;
`

export const GridBottomWrap = styled.div`
  display: flex;
  gap: 1.5em;
`

export const GridLeft = styled.div`
  width: 50%;
  height: 18em;
  padding: 20px;
  font-size: 30px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({theme}) => theme.colors.black};

  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grid_2_container {
    color: ${({theme}) => theme.colors.white};
  }

  .grid_2_content_h3 {
    font-weight: 500;
  }

  .grid_2_span {
    font-size: 0.8em;
    position: absolute;
    left: 1em;
    bottom: 1em;
    border-radius: 18px;
    padding: 6px 8px;
    &:hover {
      background-color: #fffefe2f;
    }
  }

  .grid_2_gif {
    margin: -1.8em 0 0;
  }
`

export const GridRight = styled(GridLeft)`
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};

  .grid_3_content_h3 {
    font-weight: 600;
  }

  .grid_3_count {
    margin: 2.5em 0 0 1em;
  }
`

export const PercentageIcon = styled(BsPercent)`
  font-size: 3.5em;
  color: #fff;
  transform: translateY(14px);
`

export const Count = styled(CountUp)`
  color: ${({theme}) => theme.colors.white};
  font-size: 5em;
`
