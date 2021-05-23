- Read the task.
- Clone the gist: `git clone https://gist.github.com/e19f27be9fe8c030aa59f9054bb8ddf2.git frontend-task`.
- Provide the solution in `solution.js`.

## The task

Our riders sometimes lose their items in the car. We are building a tool for the customer support. They enter rider's UUID (universally unique identifier) and get **the list of driver's emails** for all the rides from **the past month**.

The customer support will use this list to send an email to all the drivers about the lost item.

## User interface

<table>
    <tr>
        <th>Initial</th>
        <th>After the button click</th>
    </tr>
    <tr>
        <td>
            <img width="300" src="https://user-images.githubusercontent.com/794591/62029246-67942c80-b1e2-11e9-9b55-d3a11061b498.png" />
        </td>
        <td>
            <img width="300" src="https://user-images.githubusercontent.com/794591/62029245-67942c80-b1e2-11e9-84ae-26d4eb967cfe.png" />
        </td>
    </tr>
</table>

## API

In your code you can access `API.fetchDriver` and `API.fetchRecentTripsForRider`.

You should use `"TEST"` as rider's `uuid` parameter.

```js
declare const API: {
  /**
   * Fetch driver information by UUID.
   *
   * @param {string} uuid Driver's UUID.
   * @returns {Promise<{ email: string }>} Driver information.
   */
  fetchDriver(
    uuid: string
  ): Promise<{
    email: string;
  }>;

  /**
   * Fetch recent trips, returns 5 trips at a time.
   *
   * @param {string} uuid Rider's UUID.
   * @param {number} offset Offset.
   *
   * @returns {Promise<Array<{ driverUUID: string, timestamp: number }>>} Recent trips.
   */
  fetchRecentTripsForRider(
    uuid: string,
    offset?: number
  ): Promise<
    Array<{
      driverUUID: string;
      timestamp: number;
    }>
  >;
};
```
