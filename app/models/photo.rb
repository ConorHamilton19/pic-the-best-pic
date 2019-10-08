class Photo < ApplicationRecord
  validates :title, presence: { message: "Can't be blank" }
  validates :owner, presence: { message: "Can't be blank" }

  has_one_attached :picture
end
