pushd .
cd vscore\latest\32
Mfehidin -u -g {E179F170-519B-469d-AF72-BF56E2B1EED7} -l vscore15.7.1.log
popd

pushd .
cd vscore\latest\32
Mfehidin -u -g {308C1AD7-765B-4A17-B25B-D415F07357F3} -l vscore15.7.2.log
popd

pushd .
cd vscore\5.6\32
Mfehidin -u VSC15.6 -x vscore.xml -l vscore15.6.log
popd

pushd .
cd vscore\5.6\32
Mfehidin -u VSC15.4.1 -x vscore.xml -l vscore15.4.1.log
popd

pushd .
cd vscore\5.6\32
Mfehidin -u LAM_SYSCORE_15_4_1 -x lam10.xml -l lam15.4.1.log
popd

pushd .
cd vscore\5.6\32
Mfehidin -u VSC15.4 -x vscore.xml -l vscore15.4.log
popd

pushd .
cd vscore\5.6\32
Mfehidin -u LAM_SYSCORE_15_4 -x lam10.xml -l lam15.4.log
popd

pushd .
cd vscore\5.6\32
Mfehidin -u VSC15.3 -x vscore.xml -l vscore15.3.log
popd

;following command deletes the syscore registry.Hence deleting Mfehidin -uf -x vscore.xml -l vscore.log
