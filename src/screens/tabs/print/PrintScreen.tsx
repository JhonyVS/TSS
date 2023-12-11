import { variables } from '../Tab2';

class PrintScreen {
  static generateHtml(): string {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      //background-color: rgba(50, 80, 50, 0.2);
    }
    .container {
      flex: 1;
      resizeMode: 'cover';
    }
    .overlay {
      flex: 1;
      //background-color: rgba(50, 80, 50, 0.2);
    }
    .titulo {
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    .textoTitulo {
      padding-top: 30px;
      font-weight: bold;
      color: black;
      text-align: center;
      font-size: 14px;
    }
    .texto {
      color: black;
      text-align: auto;
      padding: 5px;
      font-size: 12px;
    }
    .row {
      display: flex;
      flex-direction: row;
      border-bottom: 0.7px solid #000;
    }
    .cell {
      flex: 1;
      padding: 5px;
      text-align: center;
    }
    .thirdColumn {
      flex: 0.333;
    }
    .cellTextMax {
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="overlay">
      <div class="titulo">
        <h2 class="textoTitulo">RESULTADOS</h2>
      </div>
      <div>
        <!-- Aquí comienza la tabla de resultados -->
        <div class="row">
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Costo Alquiler/Tonelada</h3>
          </div>
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Costo camion nuevo</h3>
          </div>
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Dias laborables/año</h3>
          </div>
        </div>
        <div class="row">
          <div class="cell thirdColumn">
            <p class="cellTextBordered">100 $</p>
          </div>
          <div class="cell thirdColumn">
            <p class="cellTextBordered">1.300.000 $</p>
          </div>
          <div class="cell thirdColumn">
            <p class="cellTextBordered">250</p>
          </div>
        </div>

        <div class="row">
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Promedio Produccion/dia</h3>
          </div>
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Promedio Camiones/Tonelada</h3>
          </div>
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Promedio Camiones necesarios</h3>
          </div>
        </div>
        <div class="row">
          <div class="cell thirdColumn">
            <p class="cellTextBordered">${Number(variables.promedioProds()).toFixed(2)} t.</p>
          </div>
          <div class="cell thirdColumn">
            <p class="cellTextBordered">${Number(variables.promedioCams()).toFixed(2)} t.</p>
          </div>
          <div class="cell thirdColumn">
            <p class="cellTextBordered">${Number(variables.promedioCamionesProduccion()).toFixed(2)}</p>
          </div>
        </div>

        <!-- Aquí puedes agregar más filas y columnas según sea necesario -->

        <!-- Conclusión -->
        <div class="titulo">
          <h2 class="textoTitulo">CONCLUSIONES</h2>
        </div>
        <div>
          <p class="texto">A partir de los resultados obtenidos se puede concluir la siguiente información:</p>
        </div>
        <div class="row">
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Total producción anual</h3>
          </div>
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Camiones necesarios</h3>
          </div>
          <div class="cell thirdColumn">
            <h3 class="cellTextMax">Costo de alquiler adicional</h3>
          </div>
        </div>
        <div class="row">
          <div class="cell thirdColumn">
            <p class="cellTextBordered">${Number(variables.promedioProds() * 250).toFixed(2)} t.</p>
          </div>
          <div class="cell thirdColumn">
            <p class="cellTextBordered">${Number(variables.promedioCamionesProduccion() - 1).toFixed(0)}</p>
          </div>
          <div class="cell thirdColumn">
            <p class="cellTextBordered">${Number(variables.costosCamsExtra()).toFixed(2)} $</p>
          </div>
        </div>
        <div class="row">
          <div>
            <p class="texto">La simulación recomienda comprar ${Number(variables.promedioCamionesProduccion() - 1).toFixed(0)} </p>
          </div>
        </div>
        <div class="row">
          <div>
            <p class="texto">El costo adicional anual por el alquiler de camiones será de: ${Number(variables.costosCamsExtra()).toFixed(2)}$ </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</body>
</html>


`;
  }
}

export default PrintScreen;
