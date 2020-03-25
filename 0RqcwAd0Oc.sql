-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 22-03-2020 a las 18:04:36
-- Versión del servidor: 8.0.13-4
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `0RqcwAd0Oc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `idCompra` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `descripcion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`idCompra`, `idUsuario`, `precio`, `descripcion`) VALUES
(46, 1, '1170.00', 'cosas de cuarentena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `idIngrediente` int(11) NOT NULL,
  `idMenu` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `cuantificador` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`idIngrediente`, `idMenu`, `nombre`, `cantidad`, `cuantificador`) VALUES
(1, 1, 'Milanesas', 4, 'unidades'),
(2, 1, 'papas', 4, 'unidades'),
(4, 1, 'huevos', 3, 'unidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listacompras`
--

CREATE TABLE `listacompras` (
  `idCompra` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(30) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `listacompras`
--

INSERT INTO `listacompras` (`idCompra`, `nombre`, `descripcion`, `cantidad`) VALUES
(8, 'cafe', 'cafe instantaneo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menuDia`
--

CREATE TABLE `menuDia` (
  `dia` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `horario` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `idMenu` int(11) NOT NULL,
  `idCocina` int(11) NOT NULL,
  `idPreparacion` int(11) NOT NULL,
  `idVerificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `menuDia`
--

INSERT INTO `menuDia` (`dia`, `horario`, `idMenu`, `idCocina`, `idPreparacion`, `idVerificacion`) VALUES
('Domingo', 'Mediodia', 1, 1, 1, 1),
('Domingo', 'Noche', 1, 1, 1, 1),
('Jueves', 'Mediodia', 1, 1, 1, 1),
('Jueves', 'Noche', 1, 1, 1, 1),
('Lunes', 'Mediodia', 2, 2, 2, 2),
('Lunes', 'Noche', 1, 1, 1, 1),
('Martes', 'Mediodia', 1, 1, 1, 1),
('Martes', 'Noche', 1, 1, 1, 1),
('Miercoles', 'Mediodia', 1, 1, 1, 1),
('Miercoles', 'Noche', 1, 1, 1, 1),
('Sabado', 'Mediodia', 1, 1, 1, 1),
('Sabado', 'Noche', 1, 1, 1, 1),
('Viernes', 'Mediodia', 1, 1, 1, 1),
('Viernes', 'Noche', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menus`
--

CREATE TABLE `menus` (
  `idMenu` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `menus`
--

INSERT INTO `menus` (`idMenu`, `nombre`, `descripcion`) VALUES
(1, 'Milanesas con pure de papas', 'Milanesas al horno de soja y pollo con pure de papas'),
(2, 'tarta de jamon y queso', 'tarta de jamon y queso'),
(4, 'tarta de tomates', 'tarta con 2000 mil tomates'),
(13, 'menu huggi v1', 'ya no se ni que poner'),
(14, 'menu huggi 2', 'asjdlkajsd'),
(15, 'menu huggi 3', 'kajsdlkasd'),
(16, 'menu aksjdkalsjd', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

CREATE TABLE `movimientos` (
  `idMovimiento` int(11) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `monto` decimal(11,2) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`idMovimiento`, `tipo`, `monto`, `descripcion`) VALUES
(7, 'Ingreso', '18000.00', 'inicial'),
(8, 'Egreso', '5600.00', 'no se'),
(9, 'Egreso', '3000.00', 'retiro en efectivo'),
(10, 'Egreso', '1000.00', 'supermercado'),
(11, 'Egreso', '310.00', 'KFC'),
(12, 'Egreso', '600.00', 'supermercado'),
(13, 'Egreso', '400.00', 'supermercado'),
(14, 'Egreso', '160.00', 'helado'),
(15, 'Egreso', '1000.00', 'retiro en efectivo'),
(16, 'Egreso', '500.00', 'combustible'),
(17, 'Egreso', '320.00', 'KFC'),
(18, 'Egreso', '650.00', 'supermercado'),
(19, 'Egreso', '300.00', 'mcdonald'),
(20, 'Egreso', '333.00', 'supermercado'),
(21, 'Ingreso', '600.00', 'cosas de gisela'),
(22, 'Ingreso', '4300.00', 'mama'),
(23, 'Ingreso', '2000.00', 'beca coop'),
(24, 'Egreso', '220.00', 'sushi'),
(25, 'Egreso', '330.00', 'KFC'),
(26, 'Egreso', '180.00', 'juegos de steam'),
(27, 'Egreso', '1300.00', 'supermercado'),
(28, 'Egreso', '65.00', 'juego de steam'),
(29, 'Egreso', '350.00', 'combustible'),
(30, 'Egreso', '1500.00', 'supermercado'),
(31, 'Egreso', '200.00', 'hamburguesas'),
(32, 'Egreso', '450.00', 'supermercado'),
(33, 'Egreso', '200.00', 'helado'),
(34, 'Egreso', '1441.00', 'supermercado'),
(35, 'Egreso', '500.00', 'regalo de mama'),
(36, 'Egreso', '800.00', 'supermercado'),
(37, 'Egreso', '200.00', 'helado'),
(38, 'Egreso', '900.00', 'supermercado'),
(39, 'Ingreso', '3400.00', 'cosas de gisela'),
(40, 'Ingreso', '4800.00', 'cosas de gisela'),
(41, 'Ingreso', '4800.00', 'cosas de gisela'),
(42, 'Ingreso', '3000.00', 'mama'),
(43, 'Ingreso', '2000.00', 'mama'),
(44, 'Ingreso', '2000.00', 'mama'),
(45, 'Egreso', '1566.00', 'supermercado'),
(46, 'Egreso', '100.00', 'no se'),
(47, 'Egreso', '140.00', 'steam'),
(48, 'Egreso', '1800.00', 'mouse logitech');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `idTarea` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`idTarea`, `idUsuario`, `nombre`, `descripcion`) VALUES
(4, 1, 'Baño', 'Limpiar el baño'),
(5, 1, 'pasar el trapo', 'pasar el trapo'),
(6, 1, 'barrer', 'barrer'),
(7, 1, 'cocina', 'limpiar la cocina con ciff');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareausuario`
--

CREATE TABLE `tareausuario` (
  `idTareaUsuario` int(11) NOT NULL,
  `idTarea` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareausuario`
--

INSERT INTO `tareausuario` (`idTareaUsuario`, `idTarea`, `idUsuario`) VALUES
(97, 4, 1),
(98, 5, 2),
(99, 3, 3),
(100, 7, 1),
(101, 6, 2),
(102, 8, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `email`) VALUES
(1, 'huggi', '123', 'thuggias99@gmail.com'),
(2, 'sofi', '123', ''),
(3, 'braian', '123', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`idCompra`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`idIngrediente`);

--
-- Indices de la tabla `listacompras`
--
ALTER TABLE `listacompras`
  ADD PRIMARY KEY (`idCompra`);

--
-- Indices de la tabla `menuDia`
--
ALTER TABLE `menuDia`
  ADD PRIMARY KEY (`dia`,`horario`) USING BTREE;

--
-- Indices de la tabla `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`idMenu`);

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`idMovimiento`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`idTarea`);

--
-- Indices de la tabla `tareausuario`
--
ALTER TABLE `tareausuario`
  ADD PRIMARY KEY (`idTareaUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `idCompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `idIngrediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `listacompras`
--
ALTER TABLE `listacompras`
  MODIFY `idCompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `menus`
--
ALTER TABLE `menus`
  MODIFY `idMenu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `idMovimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `idTarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tareausuario`
--
ALTER TABLE `tareausuario`
  MODIFY `idTareaUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
