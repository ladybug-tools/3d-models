SET RAYPATH=.;C:\Radiance\lib
PATH=C:\Radiance\bin;$PATH
c:
cd c:\ladybug\office\imageBasedSimulation\
oconv -r 2048 -f c:/ladybug/office/imageBasedSimulation//material_office.rad c:/ladybug/office/imageBasedSimulation/climateBasedSky@_7_1@900.sky c:/ladybug/office/imageBasedSimulation/office.rad C:/ladybug/facade/MSH2RADFiles/material_facade.rad C:/ladybug/facade/MSH2RADFiles/facade.rad c:/ladybug/furniture/MSH2RADFiles/material_furniture.rad c:/ladybug/furniture/MSH2RADFiles/furniture.rad c:/ladybug/computer/MSH2RADFiles/material_computer.rad c:/ladybug/computer/MSH2RADFiles/computer.rad c:/ladybug/chair/MSH2RADFiles/material_chair.rad c:/ladybug/chair/MSH2RADFiles/chair.rad  > office_IMG.oct
rpict -i -t 10 -vtv -vp -6.152 -0.399 2.220  -vd 0.927 0.130 -0.353  -vu 0.000 0.000 1.000  -vh 89.590 -vv 57.221 -vs 0.000 -vl 0.000 -x 64 -y 64  -af office_IMG.amb  -ps 8 -pt 0.15 -pj 0.6 -dj 0 -ds 0.5 -dt 0.5 -dc 0.25 -dr 0 -dp 64 -st 0.85 -ab 10 -ad 512 -as 128 -ar 16 -aa 0.250 -lr 4 -lw 0.050 -av 0 0 0  office_IMG.oct > office_IMG.unf
del office_IMG.unf
