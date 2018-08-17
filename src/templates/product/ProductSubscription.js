import React from 'react';
import {
  Heading, Border, Caps,
} from 'rebass';

import {
  StyledTable, Stbody, Sthead, Sth, Std, Sspan,
} from './styledSubscription';

const ProductSubscription = () => (
  <div style={{ margin: '20px 0' }}>
    <Heading fontWeight={500} color="#212529" mb={2}>
      <Caps fontSize={24} letterSpacing={1}>
        subscription menu
      </Caps>
    </Heading>
    <select style={{ width: '200px', padding: '8px 10px' }}>
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
    <Border borderColor="#c8bebe" my={20} p={0} style={{ borderRadius: '5px', zIndex: 99, overflow: 'hidden' }}>
      <StyledTable>
        <Sthead>
          <tr style={{ height: '70px' }}>
            <Sth colSpan="7" />
            <Sth>
calories
            </Sth>
            <Sth>
              carbs
              <Sspan>
&nbsp;(g)
              </Sspan>
            </Sth>
            <Sth>
              protein
              <Sspan>
&nbsp;(g)
              </Sspan>
            </Sth>
            <Sth>
              fat
              <Sspan>
&nbsp;(g)
              </Sspan>
            </Sth>
            <Sth>
              fiber
              <Sspan>
&nbsp;(g)
              </Sspan>
            </Sth>
          </tr>
        </Sthead>
        <Stbody>
          <tr>
            <Std rowSpan="4">
              <strong>
Lunch
              </strong>
            </Std>
            <Std colSpan="5" style={{ textAlign: 'left' }}>
              Main Course - Chicken Tikka Pizza
            </Std>
            <Std>
Veg
            </Std>
            <Std>
584
            </Std>
            <Std>
12
            </Std>
            <Std>
39
            </Std>
            <Std>
40
            </Std>
            <Std>
8
            </Std>
          </tr>
          <tr>
            <Std colSpan="5">
Main Course - Paneer Tikka Pizza
            </Std>
            <Std>
Non-Veg
            </Std>
            <Std>
540
            </Std>
            <Std>
11
            </Std>
            <Std>
38
            </Std>
            <Std>
35
            </Std>
            <Std>
6
            </Std>
          </tr>
          <tr>
            <Std colSpan="5">
Drink - Curcumin Mango
            </Std>
            <Std>
Veg
            </Std>
            <Std>
10
            </Std>
            <Std>
2
            </Std>
            <Std>
0
            </Std>
            <Std>
0
            </Std>
            <Std>
1
            </Std>
          </tr>
          <tr>
            <Std colSpan="5">
              Snack - Italian Almond Flax Cracker with MCT Dip
            </Std>
            <Std>
Veg
            </Std>
            <Std>
191
            </Std>
            <Std>
6
            </Std>
            <Std>
10
            </Std>
            <Std>
14
            </Std>
            <Std>
2
            </Std>
          </tr>
          <tr>
            <Std rowSpan="4">
              <strong>
Dinner
              </strong>
            </Std>
            <Std colSpan="5" style={{ textAlign: 'left' }}>
              Main Course - Mix Veg Cheese Zucchini Boats
            </Std>
            <Std>
Veg
            </Std>
            <Std>
500
            </Std>
            <Std>
11
            </Std>
            <Std>
25
            </Std>
            <Std>
39
            </Std>
            <Std>
5
            </Std>
          </tr>
          <tr>
            <Std colSpan="5">
Main Course - Chicken Cheese Zucchini Boats
            </Std>
            <Std>
Non-Veg
            </Std>
            <Std>
450
            </Std>
            <Std>
9
            </Std>
            <Std>
26
            </Std>
            <Std>
33
            </Std>
            <Std>
5
            </Std>
          </tr>
          <tr>
            <Std colSpan="5">
Drink - Curcumin Mango
              {' '}
            </Std>
            <Std>
Veg
            </Std>
            <Std>
10
            </Std>
            <Std>
2
            </Std>
            <Std>
0
            </Std>
            <Std>
0
            </Std>
            <Std>
1
            </Std>
          </tr>
          <tr>
            <Std colSpan="5">
              Snack - Italian Almond Flax Cracker with MCT Dip
              {' '}
            </Std>
            <Std>
Veg
            </Std>
            <Std>
191
            </Std>
            <Std>
6
            </Std>
            <Std>
10
            </Std>
            <Std>
14
            </Std>
            <Std>
2
            </Std>
          </tr>
          <tr>
            <Std rowSpan="4">
              <strong>
Smoothie
              </strong>
            </Std>
            <Std colSpan="5" style={{ textAlign: 'left' }}>
              Vanilla Smoothie
            </Std>
            <Std>
Veg
            </Std>
            <Std>
456
            </Std>
            <Std>
8
            </Std>
            <Std>
27
            </Std>
            <Std>
35
            </Std>
            <Std>
3
            </Std>
          </tr>
        </Stbody>
      </StyledTable>
    </Border>
  </div>
);

export default ProductSubscription;
