EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:dro_components
LIBS:sensor-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L CONN_02X03 P1
U 1 1 583871AD
P 1700 1550
F 0 "P1" H 1700 1600 50  0000 C CNN
F 1 "CONN_02X03" H 1700 1350 50  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Straight_2x03" H 1700 1550 50  0001 C CNN
F 3 "" H 1700 1550 50  0000 C CNN
	1    1700 1550
	1    0    0    -1  
$EndComp
$Comp
L CONN_01X03 P2
U 1 1 5838720E
P 5150 1350
F 0 "P2" H 5150 1150 50  0000 C CNN
F 1 "CONN_01X03" V 5250 1350 50  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Straight_1x03" H 5150 1350 50  0001 C CNN
F 3 "" H 5150 1350 50  0000 C CNN
	1    5150 1350
	1    0    0    -1  
$EndComp
$Comp
L C C2
U 1 1 583874B9
P 4550 2000
F 0 "C2" H 4575 2100 50  0000 L CNN
F 1 "100nF" H 4575 1900 50  0000 L CNN
F 2 "Capacitors_SMD:C_0603_HandSoldering" H 4588 1850 50  0001 C CNN
F 3 "" H 4550 2000 50  0000 C CNN
	1    4550 2000
	1    0    0    -1  
$EndComp
$Comp
L AS5311 U1
U 1 1 58387FF7
P 3000 1600
F 0 "U1" H 3000 1050 60  0000 C CNN
F 1 "AS5311" H 3000 2150 60  0000 C CNN
F 2 "Housings_SSOP:TSSOP-20_4.4x6.5mm_Pitch0.65mm" H 3000 1600 60  0001 C CNN
F 3 "" H 3000 1600 60  0001 C CNN
	1    3000 1600
	1    0    0    -1  
$EndComp
NoConn ~ 2400 1250
NoConn ~ 2400 1350
NoConn ~ 2400 1650
NoConn ~ 3600 1150
$Comp
L PWR_FLAG #FLG01
U 1 1 58388321
P 4550 1050
F 0 "#FLG01" H 4550 1145 50  0001 C CNN
F 1 "PWR_FLAG" H 4550 1230 50  0000 C CNN
F 2 "" H 4550 1050 50  0000 C CNN
F 3 "" H 4550 1050 50  0000 C CNN
	1    4550 1050
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR02
U 1 1 5838A6C6
P 4550 2350
F 0 "#PWR02" H 4550 2100 50  0001 C CNN
F 1 "GND" H 4550 2200 50  0000 C CNN
F 2 "" H 4550 2350 50  0000 C CNN
F 3 "" H 4550 2350 50  0000 C CNN
	1    4550 2350
	1    0    0    -1  
$EndComp
Text Label 1150 1300 2    60   ~ 0
A
Text Label 1050 1350 2    60   ~ 0
B
Text Label 950  1400 2    60   ~ 0
INC
$Comp
L C C1
U 1 1 583B67A4
P 4200 2000
F 0 "C1" H 4225 2100 50  0000 L CNN
F 1 "10uF" H 4225 1900 50  0000 L CNN
F 2 "Capacitors_SMD:C_0603_HandSoldering" H 4238 1850 50  0001 C CNN
F 3 "" H 4200 2000 50  0000 C CNN
	1    4200 2000
	1    0    0    -1  
$EndComp
$Comp
L +5V #PWR03
U 1 1 583B690B
P 3800 1150
F 0 "#PWR03" H 3800 1000 50  0001 C CNN
F 1 "+5V" H 3800 1290 50  0000 C CNN
F 2 "" H 3800 1150 50  0000 C CNN
F 3 "" H 3800 1150 50  0000 C CNN
	1    3800 1150
	1    0    0    -1  
$EndComp
Text Label 1950 1950 2    60   ~ 0
CSn
Text Label 1950 2050 2    60   ~ 0
CLK
Text Label 1950 2150 2    60   ~ 0
DO
Text Label 3900 1550 2    60   ~ 0
PWM
$Comp
L PWR_FLAG #FLG04
U 1 1 583C8036
P 4200 1150
F 0 "#FLG04" H 4200 1245 50  0001 C CNN
F 1 "PWR_FLAG" H 4200 1330 50  0000 C CNN
F 2 "" H 4200 1150 50  0000 C CNN
F 3 "" H 4200 1150 50  0000 C CNN
	1    4200 1150
	1    0    0    -1  
$EndComp
Wire Wire Line
	2400 1850 2300 1850
Wire Wire Line
	2300 1850 2300 2250
Wire Wire Line
	2300 2250 4850 2250
Wire Wire Line
	4850 2250 4850 1350
Wire Wire Line
	2300 1950 2400 1950
Connection ~ 2300 1950
Wire Wire Line
	3600 1250 4950 1250
Connection ~ 4850 2250
Connection ~ 4550 1250
Wire Wire Line
	4550 2150 4550 2350
Wire Wire Line
	3600 1350 4200 1350
Wire Wire Line
	4550 1050 4550 1850
Connection ~ 4200 1350
Connection ~ 4550 2250
Wire Wire Line
	2300 1250 2300 1450
Wire Wire Line
	2300 1450 2400 1450
Wire Wire Line
	2250 1550 2400 1550
Wire Wire Line
	2400 1750 2200 1750
Wire Wire Line
	2200 1750 2200 1350
Wire Wire Line
	2200 1350 1350 1350
Wire Wire Line
	1350 1350 1350 1650
Wire Wire Line
	2250 1300 2250 1550
Wire Wire Line
	1300 1300 2250 1300
Wire Wire Line
	1300 1300 1300 1550
Wire Wire Line
	1250 1250 2300 1250
Wire Wire Line
	1250 1250 1250 1450
Wire Wire Line
	1150 1300 1250 1300
Connection ~ 1250 1300
Wire Wire Line
	1050 1350 1300 1350
Connection ~ 1300 1350
Wire Wire Line
	1350 1400 950  1400
Connection ~ 1350 1400
Wire Wire Line
	4200 1150 4200 1850
Wire Wire Line
	4200 2150 4200 2250
Connection ~ 4200 2250
Wire Wire Line
	3800 1150 3800 1250
Connection ~ 3800 1250
Wire Wire Line
	3600 1650 4900 1650
Wire Wire Line
	4900 1650 4900 1450
Wire Wire Line
	2150 1650 2150 2300
Wire Wire Line
	2150 2300 3650 2300
Wire Wire Line
	3650 2300 3650 1950
Wire Wire Line
	3650 1950 3600 1950
Wire Wire Line
	2100 1550 2100 2350
Wire Wire Line
	2100 2350 3700 2350
Wire Wire Line
	3700 2350 3700 1850
Wire Wire Line
	3700 1850 3600 1850
Wire Wire Line
	2050 1450 2050 2400
Wire Wire Line
	2050 2400 3750 2400
Wire Wire Line
	3750 2400 3750 1750
Wire Wire Line
	3750 1750 3600 1750
Wire Wire Line
	1950 1950 2050 1950
Connection ~ 2050 1950
Wire Wire Line
	1950 2050 2100 2050
Connection ~ 2100 2050
Wire Wire Line
	1950 2150 2150 2150
Connection ~ 2150 2150
Wire Wire Line
	3900 1550 3900 1650
Connection ~ 3900 1650
Wire Wire Line
	1350 1650 1450 1650
Wire Wire Line
	1300 1550 1450 1550
Wire Wire Line
	1250 1450 1450 1450
Wire Wire Line
	2050 1450 1950 1450
Wire Wire Line
	2100 1550 1950 1550
Wire Wire Line
	2150 1650 1950 1650
Wire Wire Line
	4850 1350 4950 1350
Wire Wire Line
	4900 1450 4950 1450
$EndSCHEMATC
