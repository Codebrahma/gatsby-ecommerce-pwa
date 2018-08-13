import React from 'react';

const ProductSubscription = () => (
  <div className="demo-product-subscription">
    <h3 id="subscription-header">
subscription menu
    </h3>
    <select id="subscription-week">
      <option>
Monday
      </option>
      <option>
Tuesday
      </option>
      <option>
Wednesday
      </option>
      <option>
Thursday
      </option>
      <option>
Friday
      </option>
      <option>
Saturday
      </option>
      <option>
Sunday
      </option>
    </select>
    <div className="demo-product-table">
      <table>
        <thead>
          <tr>
            <th colSpan="7" />
            <th>
calories
            </th>
            <th>
              carbs
              <span>
&nbsp;(g)
              </span>
            </th>
            <th>
              protein
              <span>
&nbsp;(g)
              </span>
            </th>
            <th>
              fat
              <span>
&nbsp;(g)
              </span>
            </th>
            <th>
              fiber
              <span>
&nbsp;(g)
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="4" id="food-type">
              <strong>
Lunch
              </strong>
            </td>
            <td colSpan="5" id="align-left-fix">
              Main Course - Chicken Tikka Pizza
            </td>
            <td id="veg">
Veg
            </td>
            <td>
584
            </td>
            <td>
12
            </td>
            <td>
39
            </td>
            <td>
40
            </td>
            <td>
8
            </td>
          </tr>
          <tr>
            <td colSpan="5">
Main Course - Paneer Tikka Pizza
            </td>
            <td id="non-veg">
Non-Veg
            </td>
            <td>
540
            </td>
            <td>
11
            </td>
            <td>
38
            </td>
            <td>
35
            </td>
            <td>
6
            </td>
          </tr>
          <tr>
            <td colSpan="5">
Drink - Curcumin Mango
              {' '}
            </td>
            <td id="veg">
Veg
            </td>
            <td>
10
            </td>
            <td>
2
            </td>
            <td>
0
            </td>
            <td>
0
            </td>
            <td>
1
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              Snack - Italian Almond Flax Cracker with MCT Dip
            </td>
            <td id="veg">
Veg
            </td>
            <td>
191
            </td>
            <td>
6
            </td>
            <td>
10
            </td>
            <td>
14
            </td>
            <td>
2
            </td>
          </tr>
          <tr>
            <td rowSpan="4" id="food-type">
              <strong>
Dinner
              </strong>
            </td>
            <td colSpan="5" id="align-left-fix">
              Main Course - Mix Veg Cheese Zucchini Boats
            </td>
            <td id="veg">
Veg
            </td>
            <td>
500
            </td>
            <td>
11
            </td>
            <td>
25
            </td>
            <td>
39
            </td>
            <td>
5
            </td>
          </tr>
          <tr>
            <td colSpan="5">
Main Course - Chicken Cheese Zucchini Boats
            </td>
            <td id="non-veg">
Non-Veg
            </td>
            <td>
450
            </td>
            <td>
9
            </td>
            <td>
26
            </td>
            <td>
33
            </td>
            <td>
5
            </td>
          </tr>
          <tr>
            <td colSpan="5">
Drink - Curcumin Mango
              {' '}
            </td>
            <td id="veg">
Veg
            </td>
            <td>
10
            </td>
            <td>
2
            </td>
            <td>
0
            </td>
            <td>
0
            </td>
            <td>
1
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              Snack - Italian Almond Flax Cracker with MCT Dip
              {' '}
            </td>
            <td id="veg">
Veg
            </td>
            <td>
191
            </td>
            <td>
6
            </td>
            <td>
10
            </td>
            <td>
14
            </td>
            <td>
2
            </td>
          </tr>
          <tr>
            <td rowSpan="4" id="food-type">
              <strong>
Smoothie
              </strong>
            </td>
            <td colSpan="5" id="align-left-fix">
              Vanilla Smoothie
            </td>
            <td id="veg">
Veg
            </td>
            <td>
456
            </td>
            <td>
8
            </td>
            <td>
27
            </td>
            <td>
35
            </td>
            <td>
3
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ProductSubscription;
