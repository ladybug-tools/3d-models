SET RAYPATH=.;C:\Radiance\lib
PATH=C:\Radiance\bin;$PATH
c:
cd c:\ladybug\office\imageBasedSimulation\
pcompos -a 2 office_IMG_Inside_Door_0.unf office_IMG_Inside_Door_1.unf office_IMG_Inside_Door_2.unf office_IMG_Inside_Door_3.unf office_IMG_Inside_Door_4.unf office_IMG_Inside_Door_5.unf office_IMG_Inside_Door_6.unf office_IMG_Inside_Door_7.unf  > office_IMG_Inside_Door_temp.HDR
pfilt -r .6 -x /2 -y /2 office_IMG_Inside_Door_temp.HDR > office_IMG_Inside_Door.HDR
