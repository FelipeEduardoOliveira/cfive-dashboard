const minText = (text: string) => {
  if (text.length > 56) {
    return text.slice(0, 56).replace('.', '') + '...';
  }
  return text;
};

export default minText;
