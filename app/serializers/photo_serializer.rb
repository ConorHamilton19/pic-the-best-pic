class PhotoSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

attributes :id, :title, :owner, :vote_count, :picture

def image
  return unless object.picture.attached?

  object.picture.blob.attributes
        .slice('filename', 'byte_size')
        .merge(url: picture_url)
        .tap { |attrs| attrs['name'] = attrs.delete('filename') }
end

def picture_url
  url_for(object.picture)
end
end
