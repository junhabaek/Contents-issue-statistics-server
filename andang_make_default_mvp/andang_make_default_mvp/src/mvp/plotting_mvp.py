## [('a', 5), ('b', 2), ('r', 2)]
from typing import List
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from io import BytesIO

def convert_mvp_to_image_file(mvp_list: List[tuple]):
    sum_of_counts = 0
    for character in mvp_list:
        sum_of_counts+=character[1]

    mvp_ratio_list = []
    for target_tuple in mvp_list:
        mvp_ratio_list.append((target_tuple[0], target_tuple[1]/sum_of_counts))

    f, ax = plt.subplots(figsize=(25, 15))

    df = pd.DataFrame(data=mvp_ratio_list, columns=(['name', 'Ratio']))

    ax = sns.barplot(y='name', x='Ratio', data=df, palette='pastel', ax=ax)
    
    rects = ax.patches
    labels = [character[0] for character in mvp_ratio_list]
    
    for rect, label in zip(rects, labels):
        ax.text(mvp_ratio_list[0][1]/2, rect.get_y()+0.5, label,
                ha='center', va='bottom', fontdict={'size':50})
        
    ax.grid(False)
    ax.get_yaxis().set_visible(False)
    ax.set_xlabel('Ratio', fontsize=70)
    ax.set_xticklabels([])

    fig = ax.get_figure()
    mvp_image_data = BytesIO()
    fig.savefig(mvp_image_data, bbox_inches='tight')
    mvp_image_data.seek(0)
    
    return mvp_image_data