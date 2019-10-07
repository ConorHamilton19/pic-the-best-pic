class Photo < ApplicationRecord
  validates :title, presence: true
  validates :owner, presence: true
end
