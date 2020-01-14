mkdir tmp | cp *.png tmp | cd tmp
for fichier in *.png do
mv $fichier"${fichier%.png}.jpg"
done

