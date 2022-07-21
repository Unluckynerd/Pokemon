import { helper } from '@ember/component/helper';

export default helper(function color([types]) {
  let colors = {
    grass: '#69C23D',
    poison: '#923A92',
    fire: '#ED6D12',
    flying: '#8E6FEB',
    water: '#4578ED',
    bug: '#97A51D',
    normal: '#9C9C63',
    electric: '#F6C913',
    ground: '#DBB54D',
    fairy: '#E87890',
    fighting: '#AE2424',
    psychic: '#F73670',
    steel: '#A0A0C0',
    ice: '#7ECECE',
    ghost: '#644E88',
    rock: '#A48F32',
    dark: '#644E40',
  };
  let color1 = types[0].type.name;
  let color2 = types[1]?.type.name;


  if(types.length == 2){
    return `linear-gradient(90deg, ${colors[color1]} 50%, ${colors[color2]} 50%)`;
  }
  return `${colors[color1]}`;

});
