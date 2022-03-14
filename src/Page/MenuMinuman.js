import { Component } from "react";
import Header from "./Header";
import DaftarMinuman from "../Lib/DaftarMinuman";
export default class MenuMinuman extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Daftar Makanan Favorit</h3>
        <table>
          <tbody>
            <tr>
              {DaftarMinuman.map((data, index) => {
                return (
                  <td key={index}>
                    <center>
                      <img
                        src={data.img}
                        alt="Produk Minuman"
                        width="150"
                        height="100"
                      />
                      <p>{data.NamaMinuman}</p>
                      <p>Harga : Rp. {data.Harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
