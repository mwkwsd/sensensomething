// Couldn't figure out how to fit this into theme.ts
//so it is here for now
export const LinksStyle = (isSelected: boolean) => {
  return {
    backgroundColor: isSelected ? 'lightgrey' : 'black',
    color: isSelected ? 'black' : 'white',
    borderRadius: isSelected ? '24px 0 0 24px' : '0',
  }
}
