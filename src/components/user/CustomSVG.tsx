<<<<<<< HEAD
import { Box } from '@mui/system';
import { relative } from 'path';
import React from 'react';
=======
import SVGFemaleDenim from '@/svgComponents/female/bottom/SVGFemaleDenim';
import SVGFemaleHalf_shortpants from '@/svgComponents/female/bottom/SVGFemaleHalf_shortpants';
import SVGFemaleLeggings from '@/svgComponents/female/bottom/SVGFemaleLeggings';
import SVGFemaleSkirt from '@/svgComponents/female/bottom/SVGFemaleSkirt';
import SVGFemaleSlacks from '@/svgComponents/female/bottom/SVGFemaleSlacks';
import SVGFemaleSweatpants from '@/svgComponents/female/bottom/SVGFemaleSweatpants';
import SVGFemaleLong from '@/svgComponents/female/hair/SVGFemaleLong';
import SVGFemaleBasic_neck_pole from '@/svgComponents/female/top/SVGFemaleBasic_neck_pole';
import SVGFemaleBasic_t_shirts from '@/svgComponents/female/top/SVGFemaleBasic_t_shirts';
import SVGFemaleBlazer from '@/svgComponents/female/top/SVGFemaleBlazer';
import SVGFemaleBlouse from '@/svgComponents/female/top/SVGFemaleBlouse';
import SVGFemaleCardigan from '@/svgComponents/female/top/SVGFemaleCardigan';
import SVGFemaleCoat from '@/svgComponents/female/top/SVGFemaleCoat';
import SVGFemaleHoodi from '@/svgComponents/female/top/SVGFemaleHoodi';
import SVGFemaleJumper from '@/svgComponents/female/top/SVGFemaleJumper';
import SVGFemaleMustang from '@/svgComponents/female/top/SVGFemaleMustang';
import SVGFemaleOnepiece from '@/svgComponents/female/top/SVGFemaleOnepiece';
import SVGFemalePkshirts from '@/svgComponents/female/top/SVGFemalePkshirts';
import SVGFemaleShirts from '@/svgComponents/female/top/SVGFemaleShirts';
import SVGFemaleSweater from '@/svgComponents/female/top/SVGFemaleSweater';
import SVGFemaleT_shirts from '@/svgComponents/female/top/SVGFemaleT_shirts';
import SVGMaleDenim from '@/svgComponents/male/bottom/SVGMaleDenim';
import SVGMaleHalf_shortpants from '@/svgComponents/male/bottom/SVGMaleHalf_shortpants';
import SVGMaleLeggings from '@/svgComponents/male/bottom/SVGMaleLeggings';
import SVGMaleSkirt from '@/svgComponents/male/bottom/SVGMaleSkirt';
import SVGMaleSlacks from '@/svgComponents/male/bottom/SVGMaleSlacks';
import SVGMaleSweatpants from '@/svgComponents/male/bottom/SVGMaleSweatpants';
import SVGMaleMiddle from '@/svgComponents/male/hair/SVGMaleMiddle';
import SVGMaleBasic_neck_pole from '@/svgComponents/male/top/SVGMaleBasic_neck_pole';
import SVGMaleBasic_t_shirts from '@/svgComponents/male/top/SVGMaleBasic_t_shirts';
import SVGMaleBlazer from '@/svgComponents/male/top/SVGMaleBlazer';
import SVGMaleBlouse from '@/svgComponents/male/top/SVGMaleBlouse';
import SVGMaleCardigan from '@/svgComponents/male/top/SVGMaleCardigan';
import SVGMaleCoat from '@/svgComponents/male/top/SVGMaleCoat';
import SVGMaleHoodi from '@/svgComponents/male/top/SVGMaleHoodi';
import SVGMaleJumper from '@/svgComponents/male/top/SVGMaleJumper';
import SVGMaleMustang from '@/svgComponents/male/top/SVGMaleMustang';
import SVGMaleOnepiece from '@/svgComponents/male/top/SVGMaleOnepiece';
import SVGMalePkshirts from '@/svgComponents/male/top/SVGMalePkshirts';
import SVGMaleShirts from '@/svgComponents/male/top/SVGMaleShirts';
import SVGMaleSweater from '@/svgComponents/male/top/SVGMaleSweater';
import SVGMaleT_shirts from '@/svgComponents/male/top/SVGMaleT_shirts';
import { Box } from '@mui/system';
import { relative } from 'path';
import React from 'react';
type ColorArrType = {
  [key: string]: string;
};
type SVGComponentsType = {
  [key: string]: { [key: string]: { [key: string]: JSX.Element } };
};
>>>>>>> e3403ce9cef98f556be1c94cb0800098dd6ea5fb

const CustomSVG = ({ info }: any) => {
  let {
    gender,
    hair,
    hairColor,
    top,
    topColor,
    bottom,
    bottomColor,
    background,
  } = info;
<<<<<<< HEAD
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/background/${background}.png`}
      ></Box>

      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/hair/${hair}.svg`}
      ></Box>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/top/basic_t_shirts.svg`}
      ></Box>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/bottom/${bottom}.svg`}
      ></Box>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/top/${top}.svg`}
      ></Box>
=======

  const colorArr: ColorArrType = {
    white: '#f9f6f6',
    coolGray: '#d4d4d4',
    gray: '#a6a6a6',
    darkGray: '#4b5053',
    charcoal: '#444444',
    red: '#900000',
    orange: '#d98200',
    yellow: '#ffcb00',
    navy: '#2c376f',
    purple: '#8a00ac',
    green: '#0a7c00',
    black: '#000000',
    neonBlue: '#02abcf',
    peach: '#DF5353',
    darkBrown: '#362710',
    brown: '#4A3A2A',
    darkBagie: '#A3907B',
    bagie: '#A3907B',
    ligthBegie: '#A3907B',
    lightIvory: '#F5EFEF',
    ivory: '#DED3AA',
    kaki: '#3C492A',
    ligthBlue: '#CCE7FF',
    middleBlue: '#417797',
    darkBlue: '#165690',
    denim: '#1A2B47',
    sora: '#5C71C9',
    skyBlue: '#9CB0FF',
    pink: '#FFB6B6',
  };

  const SVGComponents: SVGComponentsType = {
    female: {
      inner: {
        basic_neck_pole: (
          <SVGFemaleBasic_neck_pole
            main={'white'}
            sub={''}
            detail={''}
          ></SVGFemaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGFemaleBasic_t_shirts
            main={'white'}
            sub={''}
            detail={''}
          ></SVGFemaleBasic_t_shirts>
        ),
      },
      top: {
        blouse: (
          <SVGFemaleBlouse
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleBlouse>
        ),

        blazer: (
          <SVGFemaleBlazer
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleBlazer>
        ),
        cardigan: (
          <SVGFemaleCardigan
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleCardigan>
        ),
        coat: (
          <SVGFemaleCoat
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleCoat>
        ),
        hoodi: (
          <SVGFemaleHoodi
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleHoodi>
        ),
        jumper: (
          <SVGFemaleJumper
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleJumper>
        ),
        mustang: (
          <SVGFemaleMustang
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleMustang>
        ),
        onepiece: (
          <SVGFemaleOnepiece
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleOnepiece>
        ),
        pkshirts: (
          <SVGFemalePkshirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemalePkshirts>
        ),
        shirts: (
          <SVGFemaleShirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleShirts>
        ),
        sweater: (
          <SVGFemaleSweater
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleSweater>
        ),
        sweatershirts: (
          <SVGFemaleT_shirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleT_shirts>
        ),
        t_shirts: (
          <SVGFemaleT_shirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGFemaleT_shirts>
        ),
      },
      bottom: {
        denim: (
          <SVGFemaleDenim
            main={bottomColor}
            sub={''}
            detail={''}
          ></SVGFemaleDenim>
        ),
        half_shortpants: (
          <SVGFemaleHalf_shortpants
            main={bottomColor}
            sub={''}
            detail={''}
          ></SVGFemaleHalf_shortpants>
        ),
        leggings: (
          <SVGFemaleLeggings
            main={bottomColor}
            sub={''}
            detail={''}
          ></SVGFemaleLeggings>
        ),
        skirt: (
          <SVGFemaleSkirt
            main={bottomColor}
            sub={''}
            detail={''}
          ></SVGFemaleSkirt>
        ),
        slacks: (
          <SVGFemaleSlacks
            main={bottomColor}
            sub={''}
            detail={''}
          ></SVGFemaleSlacks>
        ),
        sweatpants: (
          <SVGFemaleSweatpants
            main={bottomColor}
            sub={''}
            detail={''}
          ></SVGFemaleSweatpants>
        ),
      },
      hair: {
        long: (
          <SVGFemaleLong main={hairColor} sub={''} detail={''}></SVGFemaleLong>
        ),
      },
    },
    male: {
      inner: {
        basic_neck_pole: (
          <SVGMaleBasic_neck_pole
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleBasic_neck_pole>
        ),
        basic_t_shirts: (
          <SVGMaleBasic_t_shirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleBasic_t_shirts>
        ),
      },
      top: {
        blouse: (
          <SVGMaleBlouse
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleBlouse>
        ),

        blazer: (
          <SVGMaleBlazer
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleBlazer>
        ),
        cardigan: (
          <SVGMaleCardigan
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleCardigan>
        ),
        coat: (
          <SVGMaleCoat
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleCoat>
        ),
        hoodi: (
          <SVGMaleHoodi
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleHoodi>
        ),
        jumper: (
          <SVGMaleJumper
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleJumper>
        ),
        mustang: (
          <SVGMaleMustang
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleMustang>
        ),
        onepiece: (
          <SVGMaleOnepiece
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleOnepiece>
        ),
        pkshirts: (
          <SVGMalePkshirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMalePkshirts>
        ),
        shirts: (
          <SVGMaleShirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleShirts>
        ),
        sweater: (
          <SVGMaleSweater
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleSweater>
        ),
        sweatershirts: (
          <SVGMaleT_shirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleT_shirts>
        ),
        t_shirts: (
          <SVGMaleT_shirts
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleT_shirts>
        ),
      },
      bottom: {
        denim: (
          <SVGMaleDenim
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleDenim>
        ),
        half_shortpants: (
          <SVGMaleHalf_shortpants
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleHalf_shortpants>
        ),
        leggings: (
          <SVGMaleLeggings
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleLeggings>
        ),
        skirt: (
          <SVGMaleSkirt
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleSkirt>
        ),
        slacks: (
          <SVGMaleSlacks
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleSlacks>
        ),
        sweatpants: (
          <SVGMaleSweatpants
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleSweatpants>
        ),
      },
      hair: {
        middle: (
          <SVGMaleMiddle
            main={colorArr[topColor]}
            sub={''}
            detail={''}
          ></SVGMaleMiddle>
        ),
      },
    },
    background: {
      background: {
        background1: (
          <img
            width="100%"
            height="100%"
            src="src/assets/custom/background/background1.png"
          ></img>
        ),
        background2: (
          <img
            width="100%"
            height="100%"
            src="src/assets/custom/background/background2.png"
          ></img>
        ),
        background3: (
          <img
            width="100%"
            height="100%"
            src="src/assets/custom/background/background3.png"
          ></img>
        ),
      },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minWidth: 300,
        maxWidth: 500,
        minHeight: 300,
        maxHeight: 500,
        height: 'auto',
      }}
    >
      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents['background']['background'][background]}
      </Box>

      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['hair'][hair]}
      </Box>

      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['inner']['basic_t_shirts']}
      </Box>

      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['bottom'][bottom]}
      </Box>

      <Box sx={{ position: 'absolute' }} width="100%" height="100%">
        {SVGComponents[gender]['top'][top]}
      </Box>
>>>>>>> e3403ce9cef98f556be1c94cb0800098dd6ea5fb
    </Box>
  );
};

export default CustomSVG;
