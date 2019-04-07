/* 

Intersection: Given two straight line segments (represented as a start point and as an end point, compute the point of intersection if any)
// Slope Formula = end.x - start.x / end.y - start.y;
// yIntercept Formula = end.y - (slope * end.x);
*/

const isValueBetween = (start, middle, end) => {
  if (start > end) return end <= middle && middle <= start;
  return start <= middle && middle <= end;
};

const isPointBetween = (start1, start2, end1) => {
  return isValueBetween(start1.x, start2.x, end1.x) && isValueBetween(start1.y, start2.y, end1.y);
};

// function to swap points
const swap = (point1, point2) => {
  const x = point1.x;
  const y = point1.y;
  point1.x = point2.x;
  point1.y = point2.y;
  point2.x = x;
  point2.y = y;
}

class Line  {
  constructor(start, end) {
    const deltaY = end.y - start.y;
    const deltaX = end.x - start.x;
    this.slope = deltaY / deltaX // will be infinity (not exception) when deltaX = 0;
    this.yIntercept = end.y - this.slope * end.x;
  }
}

// Class to create point
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setPoint (x, y) {
    this.x = x;
    this.y = y;
  }
}


const intersection = (start1, end1, start2, end2) => {
  // rearrange the lines in order of x values, i.e. start is before end and line1 starts before line 2
  if (start1.x > end1.x) swap(start1, end1);
  if (start2.x > end2.x) swap(start2, end2);
  if (start1.x > start2.x) {
    swap(start1, start2);
    swap(end1, end2);
  }

  const line1 = new Line(start1, end1);
  const line2 = new Line(start2, end2);

  // if the lines are parallel, they intercept only if they have the same u intercept and start 2 is on line1 otherwise they do not intersect
  if (line1.slope === line2.slope) {
    if (line1.yIntercept === line2.yIntercept && isPointBetween(start1, start2, end1)) return start2;
    return null;
  }

  // intersection co-ordinates // TODO: Figure out formula for intersection
  const x = (line2.yIntercept - line1.yIntercept) / (line1.slope - line2.slope);
  const y = x * line1.slope + line1.yIntercept;

  const intersection = new Point(x, y);

  if (isPointBetween(start1, intersection, end1) && isPointBetween(start2, intersection, end2)) {
    return intersection;
  }

  return null;
};


const start1 = new Point(2, 4);
const end1 = new Point(5, 8);
const start2 = new Point(1, 6);
const end2 = new Point(4, 3);

console.log(intersection(start1, end1, start2, end2));
