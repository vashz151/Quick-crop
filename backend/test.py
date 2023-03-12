import numpy as np
crops = np.load('crops.npy', allow_pickle=True)
#print crops along with index and value
for i, crop in enumerate(crops):
    print(i, crop)
crops[2]="black gram"
crops[9]="kidney beans"
crops[13]="moth beans"
crops[14]="mung bean"
crops[15]="musk melon"
crops[18]="pigeon pea"
 
#save the array
np.save('crops.npy', crops)

#load the array
crops = np.load('crops.npy', allow_pickle=True)
#print crops along with index and value
for i, crop in enumerate(crops):
    print(i, crop)