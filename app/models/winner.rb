class Winner < ApplicationRecord
  self.table_name = "photos"
  has_one_attached :picture

def picture
  ActiveStorage::Attached::One.new('picture', Photo.find(id), dependent: :purge_later)
end

end
