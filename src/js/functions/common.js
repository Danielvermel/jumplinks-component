// Hide/ Show function  
export const hideShowElement = (elementName, removeClass = '', addClass = '') => {
  if(Boolean(removeClass)) elementName.classList.remove(removeClass);
  if(Boolean(addClass)) elementName.classList.add(addClass);
}
