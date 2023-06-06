function wrapping(gifts) {
  const wrap =  gifts.map(gift => {
    const char = "*".repeat(gift.length + 2);
    return [char, `*${gift}*`, char].join("\n");
  });
  return wrap;
}
