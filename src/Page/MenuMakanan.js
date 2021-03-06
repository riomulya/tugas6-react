import { Component } from "react";
import Header from "./Header";
import DaftarMakanan from "../Lib/DaftarMakanan";
export default class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Daftar Makanan Favorit</h3>
        <table>
          <tbody>
            <tr>
              {DaftarMakanan.map((data, index) => {
                return (
                  <td key={index}>
                    <center>
                      <img
                        src={data.img}
                        alt="Produk Makanan"
                        width="150"
                        height="100"
                      />
                      <p>{data.NamaMakanan}</p>
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
