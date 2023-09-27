import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { PostItem } from './PostItem'

export const PostList = ({ posts }) => {
  return (
    <AutoSizer>
      {({ width }) => (
        <FixedSizeList
          className="List"
          height={900}
          width={width}
          itemCount={100}
          itemSize={130}
        >
          {({ index, style }) => {
            const post = posts[index]
            return (
              <PostItem
                key={posts.id}
                index={index}
                post={post}
                style={style}
              />
            )
          }}
        </FixedSizeList>
      )}
    </AutoSizer>
  )
}
