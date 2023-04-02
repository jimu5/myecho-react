import React, { useCallback } from 'react';
import { useRequest, useSafeState } from 'ahooks';
import { Tree, TreeProps } from 'antd';
import type { DataNode } from 'antd/lib/tree';

import { category } from '@/utils/apis/category';

interface props {
  getAllMethod(): Promise<category[]>;
  CreateMethod(arg: any): Promise<any>;
  treeProps: TreeProps;
}

const Category: React.FC<props> = ({ getAllMethod, CreateMethod, treeProps }) => {
  const { data, runAsync } = useRequest<category[], any>(() => {
    return getAllMethod().then((data) => {
      buildTree(data);
      return data;
    })
  }
  );
  const [tree, setTree] = useSafeState<DataNode[]>([]);
  if (getAllMethod !== null) {
    treeProps.treeData = tree;
  }

  const buildTree = useCallback(
    (data: any) => {
      const tree: DataNode[] = [];
      data.forEach((item: category) => {
        if (item.father_uid === "" || item.father_uid === null) {
          tree.push({
            title: `${item.name}(${item.count})`,
            key: item.uid,
            children: [],
          });
        } else {
          const parent = tree.find((i: any) => i.key === item.father_uid);
          if (parent) {
            parent.children!.push({
              title: `${item.name}(${item.count})`,
              key: item.uid,
              children: [],
            });
          }
        }
      });
      setTree(tree);
    },
    [setTree]
  );
  return (
    <div>
      <Tree {...treeProps} ></Tree>
    </div>
  );
};

export default Category;
