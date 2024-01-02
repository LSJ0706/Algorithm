function solution(fees, records) {
  const total_price = new Map();
  const parked = new Map();

  for (let record of records) {
    let [time, num, status] = record.split(' ');
    let [hour, minute] = time.split(':');
    time = 60 * Number(hour) + Number(minute);

    if (status === 'IN') {
      parked.set(num, time);
    } else if (status === 'OUT') {
      total_price.set(
        num,
        (total_price.get(num) || 0) + (time - parked.get(num)),
      );
      parked.delete(num);
    }
  }

  for (let [num, time] of parked.entries()) {
    total_price.set(num, (total_price.get(num) || 0) + (1439 - time));
  }

  return [...total_price]
    .sort((a, b) => a[0] - b[0])
    .map(e =>
      e[1] < fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((e[1] - fees[0]) / fees[2]) * fees[3],
    );
}